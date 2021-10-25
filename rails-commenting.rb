# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Class generated in rails to communicate the interaction between user and app
class BlogPostsController < ApplicationController
  def index
    # ---2) index added to get all posts from BlogPost
    @posts = BlogPost.all
  end

  def show
    # ---3) show action to fetch posts by id in params
    @post = BlogPost.find(params[:id])
  end

  # ---4) new action that will allow user to to add information that will be stored inside the database
  def new 
    @post = Post.new
  end

  def create
    # ---5) create action allows making of new content via post (http verb). In this case we are validating the information.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) edit return HTML form for editing the post
  def edit 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) update post params and validates it

    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) since the path is destroyed, we redirect to this path
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private method allows for encapsulatnig params. This also allows for reusing the same permit between create and update.
  private
  private
  def blog_post_params
    # ---10) CRUD actions require params from the HTTP. Thesee params are private and only containTitle and Content
    params.require(:blog_post).permit(:title, :content)
  end
end
