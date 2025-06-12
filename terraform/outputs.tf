output "public_ip" {
  description = "EC2 public IP"
  value       = aws_instance.hritikmania_ec2.public_ip
}

output "bucket" {
  description = "S3 bucket name"
  value       = aws_s3_bucket.media_bucket.bucket
}

output "iam_user" {
  description = "IAM user name"
  value       = aws_iam_user.iam_user.name
}