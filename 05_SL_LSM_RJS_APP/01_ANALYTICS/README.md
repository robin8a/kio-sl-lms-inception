# References
- https://docs.aws.amazon.com/streams/latest/dev/fundamental-stream.html
- https://www.youtube.com/watch?v=xu3A_7DcRgQ
- https://aws.amazon.com/blogs/storage/querying-data-without-servers-or-databases-using-amazon-s3-select/

## AWS Invented (good example)
- https://www.youtube.com/watch?v=xu3A_7DcRgQ

## Pricing
- https://aws.amazon.com/kinesis/data-streams/pricing/

## Agregation
- https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-select-sql-reference-aggregate.html
- https://www.youtube.com/watch?v=xu3A_7DcRgQ

## Kinesis datastream => Firehose => s3 (cvs)
- [How can I convert a JSON to CSV using data transformation (lambda and python) in a Kinesis Firehose?](https://www.youtube.com/watch?v=w0EaPnGNPZA)

# CLI
```sh
aws kinesis list-streams


    "StreamNames": [
        "kiosllmsrjsappKinesis-dev"
    ],
    "StreamSummaries": [
        {
            "StreamName": "kiosllmsrjsappKinesis-dev",
            "StreamARN": "arn:aws:kinesis:us-east-1:036134507423:stream/kiosllmsrjsappKinesis-dev",
            "StreamStatus": "ACTIVE",
            "StreamModeDetails": {
                "StreamMode": "PROVISIONED"
            },
            "StreamCreationTimestamp": "2023-10-31T14:28:09-05:00"
        }
    ]
}

aws kinesis describe-stream-summary --stream-name kiosllmsrjsappKinesis-dev

aws kinesis put-record --stream-name kiosllmsrjsappKinesis-dev --partition-key 123 --data testdata

aws kinesis get-shard-iterator --shard-id shardId-000000000000 --shard-iterator-type TRIM_HORIZON --stream-name kiosllmsrjsappKinesis-dev

{
    "ShardIterator": "AAAAAAAAAAH9kES7x3z2xvoIH2U4jmuXmaiCr95JECYpKRTmlkYOGY0cV0/jf5RCPMFDqGaqNCnb7UBDCEvlA/ISf4E9YAY/EAYpinMB3+5NOyPVQOly75j+0J8RcT7hvTfRafIF1llATxbR0HcPDBiUYxPdPv0r+mm7u4073trNshpNbO6MHVr0wefTRWoSD1a166DOayjws/yAyeDzM+Kn93iFtlHUjrCjWzFovQ26iUX0xpnx8Wq99mtkZ7d2mHpMspoOO9c="
}

aws kinesis get-records --shard-iterator AAAAAAAAAAH9kES7x3z2xvoIH2U4jmuXmaiCr95JECYpKRTmlkYOGY0cV0/jf5RCPMFDqGaqNCnb7UBDCEvlA/ISf4E9YAY/EAYpinMB3+5NOyPVQOly75j+0J8RcT7hvTfRafIF1llATxbR0HcPDBiUYxPdPv0r+mm7u4073trNshpNbO6MHVr0wefTRWoSD1a166DOayjws/yAyeDzM+Kn93iFtlHUjrCjWzFovQ26iUX0xpnx8Wq99mtkZ7d2mHpMspoOO9c=

SHARD_ITERATOR=$(aws kinesis get-shard-iterator --shard-id shardId-000000000000 --shard-iterator-type TRIM_HORIZON --stream-name kiosllmsrjsappKinesis-dev --query 'ShardIterator')

aws kinesis get-records --shard-iterator $SHARD_ITERATOR

```

