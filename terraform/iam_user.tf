resource "aws_iam_user" "iam_user" {
  name = "hritikmenia_user"
}

resource "aws_iam_user_policy_attachment" "admin_access" {
  user       = aws_iam_user.iam_user.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

resource "aws_iam_policy" "custom_policy" {
  name        = "HritikmaniaMediaS3FullAccess"
  description = "Grants full S3 access to the hritikmania-media bucket and its contents. it will serve to store and retrieve movie posters"

  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : [
          "s3:*"
        ],
        "Resource" : [
          "arn:aws:s3:::hritikmania-media",
          "arn:aws:s3:::hritikmania-media/*"
        ]
      }
    ]
  })
}

resource "aws_iam_user_policy_attachment" "custom_policy_attach" {
  user       = aws_iam_user.iam_user.name
  policy_arn = aws_iam_policy.custom_policy.arn
}
