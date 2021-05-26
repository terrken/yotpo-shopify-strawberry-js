# yotpo-shopify-strawberry-js
Create your own Yotpo Widget in Shopify through Yotpo API using Strawberry.js. To contribute: terradokenjie@gmail.com

## Installation
#### 1. Add script tags for AngularJS
Strawberry.js, being an AngularJS library, requires the following AngularJS scripts: 

`<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js'></script>`

`<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-sanitize.js'></script>`

You can add the script tags just below the </head> tag in your Shopify theme. 

#### 2. Upload `strawberry.js` source code in the Assets folder of your Shopify theme. 
#### 3. Create `yotpo-widget.liquid` file and paste the contents of the yotpo-widget.liquid file in this repository.

## $interpolateProvider
Shopify .liquid renders variables inside the regular expression `{{ myVariable }}`, and guess what, Angular does too! When you add the Angular template expression in a .liquid file, Shopify think it's theirs, and their template engine tries to parse it. How do we avoid this conflict? We re-configured the template expression used in Angular to be in the following format: 

`{[{ myVariable }]}`

## yotpo-widget.htm 
Your actual widget design should be coded inside the yotpo-widget.htm. Angular parses the data fetched from the Yotpo Get Review API, converts the JSON data into an object, and renders the response property of the object created. 

## Data Binding 
The contents of the response data in the Get Review API response can be called using the following format: 

`{[{ data.bottomline.total_review }]}`

## Sample Widget Design (from `sample-custom-widget.htm`) 
![](https://cdn.shopify.com/s/files/1/0560/7466/6159/files/review-design.png?v=1622060759)

The sky is the limit!




