# Models


# Comment model

class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='comments')
    parent_post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    body = models.CharField(max_length=150)
    likes = models.ManyToManyField(User, related_name='likedcomments', through='LikedComment')
    created = models.DateTimeField(auto_now_add=True)
    id = models.CharField(max_length=100, default=uuid.uuid4, unique=True, primary_key = True, editable=False)

    def __str__(self):
        try:
            return f'{self.author.username} : {self.body[:30]}' 
        except:
            return f'no author : {self.body[:30]}' 
        
    class Meta:
        ordering = ['-created']


# Reply model

class Reply(models.Model):
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="replies")
    parent_comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name="replies")
    body = models.CharField(max_length=150)
    likes = models.ManyToManyField(User, related_name='likedreplies', through='LikedReply')
    created = models.DateTimeField(auto_now_add=True)
    id = models.CharField(max_length=100, default=uuid.uuid4, unique=True, primary_key = True, editable=False)

    def __str__(self):
        try:
            return f'{self.author.username} : {self.body[:30]}'
        except:
            return f'no author : {self.body[:30]}'

    class Meta:
        ordering = ['created']
        
#####################################################################################################################

@login_required 
def comment_sent(request, pk):
    post = get_object_or_404(Post, id=pk)
    replyform = ReplyCreateForm()
    
    if request.method == 'POST':
        form = CommentCreateForm(request.POST)
        if form.is_valid:
            comment = form.save(commit=False)
            comment.author = request.user
            comment.parent_post = post            
            comment.save()
            
    context = {
        'post' : post,
        'comment': comment,
        'replyform': replyform
    }

    return render(request, 'snippets/add_comment.html', context)


@login_required 
def reply_sent(request, pk):
    comment = get_object_or_404(Comment, id=pk)
    replyform = ReplyCreateForm()
    
    if request.method == 'POST':
        form = ReplyCreateForm(request.POST)
        if form.is_valid:
            reply = form.save(commit=False)
            reply.author = request.user
            reply.parent_comment = comment            
            reply.save()
            
    context = {
        'reply' : reply,
        'comment': comment,
        'replyform': replyform
    }

    return render(request, 'snippets/add_reply.html', context)
@login_required
def comment_delete_view(request, pk):
    post = get_object_or_404(Comment, id=pk, author=request.user)
    
    if request.method == "POST":
        post.delete()
        messages.success(request, 'Comment deleted')
        return redirect('post', post.parent_post.id )
        
    return render(request, 'a_posts/comment_delete.html', {'comment' : post})


@login_required
def reply_delete_view(request, pk):
    reply = get_object_or_404(Reply, id=pk, author=request.user)
    
    if request.method == "POST":
        reply.delete()
        messages.success(request, 'Reply deleted')
        return redirect('post', reply.parent_comment.parent_post.id )
        
    return render(request, 'a_posts/reply_delete.html', {'reply' : reply})



######################################################################################################################

"""
URL configuration for a_core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from a_posts.views import *
from a_users.views import *
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic.base import TemplateView

# Sitemaps
from django.contrib.sitemaps.views import sitemap
from a_posts.sitemaps import *

sitemaps = {
    'static' : StaticSitemap,
    'categories' : CategorySitemap,
    'postpages' : PostpageSitemap
}

urlpatterns = [
    path('sitemap.xml/', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    path('robots.txt/', TemplateView.as_view(template_name="robots.txt", content_type="text/plain")),
    path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),
    path('theboss/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('', home_view, name='home'),
    path('category/<tag>/', home_view, name="category"),
    path('post/create/', post_create_view, name='post-create'),
    path('post/delete/<pk>/', post_delete_view, name='post-delete'),
    path('post/edit/<pk>/', post_edit_view, name='post-edit'),
    path('post/<pk>/', post_page_view, name="post"), 
    path('post/like/<pk>/', like_post, name="like-post"), 
    path('comment/like/<pk>/', like_comment, name="like-comment"), 
    path('reply/like/<pk>/', like_reply, name="like-reply"), 
    path('profile/', profile_view, name="profile"), 
    path('<username>/', profile_view, name="userprofile"),
    path('profile/edit/', profile_edit_view, name="profile-edit"), 
    path('profile/delete/', profile_delete_view, name="profile-delete"),
    path('profile/onboarding/', profile_edit_view, name="profile-onboarding"),
    path('profile/verify-email/', profile_verify_email, name="profile-verify-email"),
    path('commentsent/<pk>/', comment_sent, name='comment-sent'), 
    path('comment/delete/<pk>/', comment_delete_view, name='comment-delete'),
    path('replysent/<pk>/', reply_sent, name='reply-sent'), 
    path('reply/delete/<pk>/', reply_delete_view, name='reply-delete'),
    path('_/', include('a_landingpages.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
        
