resource "aws_s3_bucket" "media_bucket" {
  bucket        = "hritikmania-media"
  force_destroy = true

  tags = {
    Name        = "Hritikmania Media Bucket"
    Environment = var.environment
  }
}