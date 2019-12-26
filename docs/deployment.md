---
id: deployment
title: Deployment
---

This project comes with a simple terraform infrastructure setup, and AWS deploy script.

## Prerequisites

In order for deployments to work you need to have `terraform` and `aws-cli` setup in your bash. You also need a domain name configured with a route53 zone.

- [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html)
- [Install Terraform version 12.18](https://learn.hashicorp.com/terraform/getting-started/install.html)
- [Setup your AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-quick-configuration)
- [Create a Route53 Zone](https://www.youtube.com/watch?v=HwZ3wNaM69s)

> This deployment has only been tested with `Terraform v0.12.18` and `aws-cli/1.16.309 Python/2.7.17rc1 Linux/5.3.0-20-generic botocore/1.13.45`

## Setup Terraform

Before we get started, we need to setup some terraform files in order to build our infrastructure. There is a `project.auto.tfvars.sample` located at the root of the project. Rename this file to `project.auto.tfvars` and lets get started.

In `project.auto.tfvars` you should find the following:

```tf
aws_region = "us-east-1"
domain_name = "app.example.com"
hosted_zone = "example.com"
```

1. Change `hosted_zone` to whatever your hosted zone name is.
1. Change `domain_name` to whatever you app's domain is going to be. This will also be the name of your bucket, so make sure it doesn't already exist.
1. Save the file

Now you should be ready to deploy your infrastructure. This implicates that you will create and incur the costs of the following AWS resources:

- S3 Bucket
- Cloudfront Distribution
- ACM SSL Certificate

> Don't worry, this will not be anywere near expensive unless you have a wildly popular site. Think $1 or $2 per month.

> Cloudfront only uses certificates from `us-east-1` so do NOT change the `aws_region` unless you know what you're doing.

To deploy your infrastructure, run the following commands

```bash
terraform init
terraform apply
```

It may take up to 30 minutes to initially setup your infrastructure (cloudfront takes forever to create).

Once your infrastructure is done, you should have some kind of output in your terminal:

```bash

Apply complete! Resources: X added, X changed, X destroyed.

Outputs:

bucket_name = app.example.com
certificate_arn = arn:aws:acm:us-east-1:1234567890:certificate/11111111-2222-2222-2222-3333333333333
distribution_id = ABCDE1234FG56H

```

In the root of your project, rename `sample.env` to `.env`. Copy `distribution_id` and `bucket_name` and paste them in their respective variable names. This will be used for deployment later on.

## Deploying to AWS

After your project is ready to be published, deployment should be as easy as:

```bash
npm run deploy
```

This will run tests, export `.env`, upload files to s3, and create a cloudfront invalidation. You app should be live within 5 minutes!


## Deploy using Docker

The project also comes with a `Dockerfile` that builds and creates an NGINX image. All it does is server static files using nginx.

```bash
docker build --rm -t riotapp:latest .
docker run -p 3000:80 riotapp:latest
```