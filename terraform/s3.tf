resource "aws_s3_bucket" "media_bucket" {
  bucket        = "hritikmania-media"
  force_destroy = true

  tags = {
    Name        = "Hritikmania Media Bucket"
    Environment = var.environment
  }
}

resource "aws_s3_bucket_public_access_block" "media_bucket_block" {
  bucket = aws_s3_bucket.media_bucket.id

  block_public_acls       = false
  ignore_public_acls      = false
  block_public_policy     = false
  restrict_public_buckets = false
}
