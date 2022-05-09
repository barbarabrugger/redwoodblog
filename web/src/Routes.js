// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import CitiesLayout from 'src/layouts/CitiesLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from './layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/charts" page={ChartsPage} name="charts" />
      <Set wrap={CitiesLayout}>
        <Route path="/cities/new" page={CityNewCityPage} name="newCity" />
        <Route path="/cities/{id:Int}/edit" page={CityEditCityPage} name="editCity" />
        <Route path="/cities/{id:Int}" page={CityCityPage} name="city" />
        <Route path="/cities" page={CityCitiesPage} name="cities" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/marco2" page={Marco2Page} name="marco2" />
        <Route path="/marco" page={MarcoPage} name="marco" />
        <Route path="/location/{id:Int}" page={LocationPage} name="location" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Private>
      <Set wrap={BlogLayout}>
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about-us" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
