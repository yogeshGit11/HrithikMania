output "public_ip" {
  description = "EC2 Public IP"
  value       = aws_instance.hritikmania_ec2.public_ip
}
