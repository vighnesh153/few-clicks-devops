# Few Clicks DevOps

The intention of this project is to automate the process of deploying any front-end, app built using popular frameworks like Angular, React, Vue, to AWS S3 + AWS Cloudfront and AWS Lambda@Edge Functions.

Also, if possible, the plans are to automatically configure domain names (CNAME) for the app and create & assign a new SSL certificate to have HTTPS for our domain.

The fact that this process, if done manually, takes at least around an hour is both not acceptable and frustrating. It is very easy to miss out some key configuration and then debugging that is a whole different mess. 

Another reason why this is important is because having different environments, like DEV/QA/STAGING/PROD, for a project will again require us to create different S3 bucket and CloudFront distribution for the same and configure a new CNAME for it. Creating them will be very repetitive and annoying. Managing the promotions to different environments is also not a trivial task.

For a guy like me, who likes to make new projects often and who doesn't like to manage the DevOps (because it is boring) and who is willing to pay a few extra bucks to get rid of the manual DevOps stuff, this project is going to be very helpful.

This is just the beginning and it will definitely take a lot of time as I am the sole developer of this project (I like to keep it that way) and given my lack of skills in the DevOps automation domain, it is going to be fun and a challenging journey to make this come true. 

Suggestions and Feature Requests are most welcome either in the form of Github Issues or mail them to me directly at [me@vighnesh153.com](mailto:me@vighnesh153.com).

### Future Plans
* Extend this to support Dockerized NodeJS APIs (requirement is to learn **AWS ECS** thoroughly, as I am not willing to use **AWS EKS** because the overhead cost is too much).
