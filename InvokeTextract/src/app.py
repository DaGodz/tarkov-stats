from urllib.parse import unquote_plus

import boto3

s3_client = boto3.client('s3')
textract_client = boto3.client('textract')

# SNS_TOPIC_ARN = 'arn:aws:sns:eu-west-1:832044451952:AmazonTextract-TarkovTopic'    # We need to create this
# ROLE_ARN = 'arn:aws:iam::832044451952:role/TextractServiceRole'   # This role is managed by AWS

def lambda_handler(event, _):
    print(f'Event: {event}')
    # for record in event['Records']:
    #     bucket = record['s3']['bucket']['name']
    #     key = unquote_plus(record['s3']['object']['key'])

    #     print(f'Document detection for {bucket}/{key}')

    #     textract_client.start_document_text_detection(
    #         DocumentLocation={'S3Object': {'Bucket': bucket, 'Name': key}},
    #         NotificationChannel={'RoleArn': ROLE_ARN, 'SNSTopicArn': SNS_TOPIC_ARN})