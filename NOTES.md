## Notes

#### Link Repo
Following Synchronous operations
* Create a repo document in the collection. Items of the document include, but not limited to:
  - Stages array (initially empty) 
  - Repo ID
  - Repo Name
* Fire event `CREATE_STAGE` with following info:
  - env: production
  - repo_id: `<REPO-ID>`
  - is_frontend: `true`
  - is_backend: `false` (future plans)
  - frontend_type: `REACT|ANGULAR|VUE` (future plans, currently only REACT)
  - backend_type: `NODEJS` (future plans)

#### Lambda Event: CREATE_STAGE
Following Synchronous operations
* Insert the stage object in the Stages array of the repo, with the following items:
  - env: `<ENV-NAME>`
  - repo_id: `<REPO-ID>` (will be used later and is not redundant)
  - auto_approval: `false`
* Create a new bucket for the stage and save the bucket's info in the Buckets collection.
* Create a new Cloudfront Distribution and link it to the newly created bucket with some awesome configurations and then, save the cloudfront distribution's information in the CloudFront Distributions collection.
* Update the bucket policy to allow Cloudfront Distribution to Get and List the Bucket.
* Configure Error Pages to return the respective page for the Framework.
* Update the stage object in the Stages array of the repo, with the following items:
  - bucket_id
  - cloudfront_distribution_id

#### Lambda Event: STAGE_PROMOTION_FRONTEND
Following Synchronous operations
* Received props:
  - repo_id
  - to_stage
* Clone the repository
* Build using `npm run build`
* Sync (with --delete flag) the S3 bucket of the stage with the new build artifacts.
* Invalidate the current repo's stage's Cloudfront Distribution's cache.

