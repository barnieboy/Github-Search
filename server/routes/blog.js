import Blog from '../models/blog';
import express from 'express';
import authenticate from '../middlewares/authenticate';

let router = express.Router();

router.post('/addnewblog', authenticate ,(req, res) => {
    var model = new Blog();
    model.title = req.body.title;
    model.body = req.body.body;
 model.save(function(err,blog){
    if(err){
      res.json({code:403,message:"failed",data:err});
    }else{
       res.json({code:200,message:"Blog Added" ,data:blog});
    }  
  });
});
/* ===============================================================
     GET ALL BLOGS
  =============================================================== */
  router.get('/allBlogs',authenticate, (req, res) => {
    // Search database for all blog posts
    Blog.find({}, (err, blogs) => {
      // Check if error was found or not
      if (err) {
        res.json({ success: false, message: err }); // Return error message
      } else {
        // Check if blogs were found in database
        if (!blogs) {
          res.json({ success: false, message: 'No blogs found.' }); // Return error of no blogs found
        } else {
          res.json({ success: true, blogs: blogs }); // Return success and blogs array
        }
      }
    }).sort({ '_id': -1 }); // Sort blogs from newest to oldest
  });
  /* ===============================================================
     GET SINGLE BLOG
  =============================================================== */
  router.get('/singleBlog/:id',authenticate, (req, res) => {
    // Check if id is present in parameters
    if (!req.params.id) {
      res.json({ success: false, message: 'No blog ID was provided.' }); // Return error message
    } else {
      // Check if the blog id is found in database
      Blog.findOne({ _id: req.params.id }, (err, blog) => {
        // Check if the id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid blog id' }); // Return error message
        } else {
          // Check if blog was found by id
          if (!blog) {
            res.json({ success: false, message: 'Blog not found.' }); // Return error message
          } else {
            // Find the current user that is logged in
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err }); // Return error
              } else {
                // Check if username was found in database
                if (!user) {
                  res.json({ success: false, message: 'Unable to authenticate user' }); // Return error message
                } else {
                  // Check if the user who requested single blog is the one who created it
                  if (user.username !== blog.createdBy) {
                    res.json({ success: false, message: 'You are not authorized to edit this blog.' }); // Return authentication reror
                  } else {
                    res.json({ success: true, blog: blog }); // Return success
                  }
                }
              }
            });
          }
        }
      });
    }
  });

  
  /* ===============================================================
     DELETE BLOG POST
  =============================================================== */
  router.delete('/deleteBlog/:id', authenticate,(req, res) => {
    // Check if ID was provided in parameters
    if (!req.params.id) {
      res.json({ success: false, message: 'No id provided' }); // Return error message
    } else {
      // Check if id is found in database
      Blog.findOne({ _id: req.params.id }, (err, blog) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: 'Invalid id' }); // Return error message
        } else {
          // Check if blog was found in database
          if (!blog) {
            res.json({ success: false, messasge: 'Blog was not found' }); // Return error message
          } else {
                  // Remove the blog from database
                  blog.remove((err) => {
                    if (err) {
                      res.json({ success: false, message: err }); // Return error message
                    } else {
                      res.json({ success: true, message: 'Blog deleted!' }); // Return success message
                    }
                  });
                }
              }
            })        
          }
  });
export default router;
