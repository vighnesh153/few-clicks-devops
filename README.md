# Few Clicks DevOps [ARCHIVED] [DEPRECATED]
## THERE EXISTS AN AWS SERVICE CALLED **AWS AMPLIFY** WHICH DOES THE EXACT SAME THING THAT THIS PROJECT INTENDED TO DO AND MUCH MORE. THIS IS UNFORTUNATE AS I WAS SO EXCITED TO DO THIS BUT NOW IT SEEMS REDUNDANT AND NOW, I AM NO LONGER MOTIVATED TO BUILD THIS.

The intention of this project is to automate the process of deploying any front-end, app built using popular frameworks like Angular, React, Vue, to AWS S3 + AWS Cloudfront and AWS Lambda@Edge Functions.

Also, if possible, the plans are to automatically configure domain names (CNAME) for the app. It will automatically have an SSL certificate (and hence, HTTPS) as I have created one for the `*.vighnesh153.com` domain.

This process, if done manually, takes at least around an hour is both not acceptable and frustrating. It is very easy to miss out some key configuration and then debugging that is a whole different mess. 

Another reason why this is important is because having different environments, like DEV/QA/STAGING/PROD, for a project will again require us to create different S3 bucket and CloudFront distribution for the same and configure a new CNAME for it. This is very repetitive and annoying. Managing the promotions to different environments, **manually**, is also not a trivial task.

For a guy like me, who likes to make new projects often and who doesn't like to manage the DevOps (because it is boring) and who is willing to pay a few extra bucks to get rid of the manual DevOps stuff, this project is going to be very helpful.

This is just the beginning and it will take some time given that I am just a beginner in the DevOps automation domain and I am the sole developer of this project (I like to keep it that way). Nevertheless, it is going to be a fun and challenging journey to work on this project. 

Suggestions and Feature Requests are most welcome either in the form of Github Issues or mail them to me directly at [me@vighnesh153.com](mailto:me@vighnesh153.com).

### Future Plans
* Extend this to support Angular and Vue. Here, only the build command and the artifacts directory changes. This is **up-for-grabs**.
* Extend this to support Gatsby(and other static sites libraries/frameworks), NextJS. This is not going to be trivial because in static sites libraries, we will also have to configure a Lambda@Edge function to account for the [.html configuration](https://blog.vighnesh153.com/2020/12/deploy-static-sites-and-pure-spas-to-aws-using-s3-cloudfront-and-lambda-at-edge-functions.html#fixing-the-bug-.html-bug). And, for server-side-rendering frameworks, like NextJS, we need to deploy the static assets to a CloudFront Distribution and deploy the server to AWS ECS (which will make the server, easily scalable). Again, **NOT A TRIVIAL TASK TO AUTOMATE**.
* Extend this to support Dockerized NodeJS APIs (requirement is to learn **AWS ECS** thoroughly, because I am not inclined to use **AWS EKS** as the overhead cost is too much).
