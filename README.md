# yallajo-backend

### Change Log 14/8/2022

**By Malek**

1. add 3 folders in the database folder:
    1. connection.
    2. models.
    3. schema.
2. add 3 files in schemas folder
    1. articleSchema
    2. blogSchema
    3. serviceSchema
3. add 3 files in models folder:
    1. articleModel.
    2. blogModel.
    3. serviceModel.

2. Refactoring modules name:
    - handleGetService.
    - handleGetApiData.

3. add new files in module folder:

- handleGetApiData.
- handleGetService.
- addNewUser.
- handleGetBlogs.
- handleGetService.
- addArticle.

#### It was tested and passed successfully

> app.get("/city", handleGetApiData);
> app.get('/blog', handleGetBlogs);
> app.post('/service',addService);
> app.post('/article',addArticle);
> app.post('/user',addNewUser);

### > add temp folder to put the unorgnaized code

####

 blogSchema = new mongoose.Schema({
  title: String,
  keyword: String,
  content: String,
  image: String,
  author :{
    type: mongoose.Schema.Type.objectId,
    ref: userModel
  }
});

userSchema = new mongoose.Schema({
    name: String,
    image: String,
    email: String,
    blog: {
      type:mongoose.Schema.Type.ObjectId,
      ref: blogModel
    }
  });

user = Ahmad
blog = Petra

ahmad.blog.push(petra)

user.find(ahmad)
name
image
email
blog: {blogid1,blogid2}

ahmad.populate
user.find(ahmad)
name
image
email
blog: {name: String,
    image: String,
    email: String,
    blog: {
      type:mongoose.Schema.Type.ObjectId,
      ref: blogModel
      ,name: String,
    image: String,
    email: String,
    blog: {
      type:mongoose.Schema.Type.ObjectId,
      ref: blogModel}
