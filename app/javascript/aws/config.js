import { aws } from '../../../keys';

const config = {
  bucketName: aws.bucket,
  region: aws.region,
  accessKeyId: aws.access_key_id,
  secretAccessKey: aws.secret_access_key,
  header: 'Access-Control-Allow-Origin',
};

export default config;
