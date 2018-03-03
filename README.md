### VueOnRails
___
### HowTo:
* Vue Stuff is located in `/app/javascripts/`.
* Stylesheets are still available in Rails Assets `/app/assets/...`
* Start Puma (Rails Server) and Webpack-dev-server (Compiled Vue Assets) by using gem Foreman - after defining commands in `./Procfile` - with `foreman start` in console
___
### Done Steps:
 
##### Create Rails App 
`rails new RailsApi`

##### Added Webpacker and Foreman to Gemfile 
`gem 'webpacker'` <br> 
`gem 'foreman'` <br>
then run: `bundle install`

##### Install Webpacker and Vue
`rails webpacker:install` <br>
`rails webpacker:install:vue`

##### Add Webpack-cli for webpack-dev-server
`yarn add webpack-cli -D` 
###### Downgrade Webpack-Cli because of issues with newest version
`yarn upgrade webpack-dev-server@^2.11.1`

##### Generate App Controller with index action
`rails g controller App index`
> Delete all the stuff in app/views/app/index.html

##### Make Rails Server listen on Webpack-dev-server in config/environments/development.rb
`config.x.webpacker[:dev_server_host] = 'http://localhost:8080'`


##### Add compiled Vue Javascript to `<head>` of layout/application.html
`<%= javascript_pack_tag 'application' %>`