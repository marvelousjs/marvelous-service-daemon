/*
 * this file is automatically generated for marvelous via zappjs
 * any manual changes to this file will be overwritten with the "mvs" command
 */

import * as http from 'http';
import * as url from 'url';

interface IDaemonServiceClientOpts {
  url: string;
}

interface IDaemonServiceClient {
  listPlatforms: IDaemonServiceClientListPlatformsFunction;
}

export interface IDaemonServiceClientListPlatformsFunction {
  (request?: IDaemonServiceClientListPlatformsRequest): Promise<IDaemonServiceClientListPlatformsResponse>;
}

export interface IDaemonServiceClientListPlatformsRequest {
}
export interface IDaemonServiceClientListPlatformsResponse {
  platforms: IDaemonServiceClientListPlatformsResponsePlatforms[];
}

export interface IDaemonServiceClientListPlatformsResponsePlatforms {
  name: string;
}

async function handler(req: any = {}, urlString: string = ''): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      const reqString = JSON.stringify(req);
      const urlParts = url.parse(urlString);
      
      const input = http.request(
        {
          protocol: urlParts.protocol,
          host: urlParts.hostname,
          port: urlParts.port,
          path: urlParts.pathname,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(reqString)
          }
        },
        output => {
          let responseString = '';

          output.on('data', chunk => {
            responseString += chunk;
          });

          output.on('end', () => {
            try {
              const response = JSON.parse(responseString) || {};
              if (output.statusCode === 200) {
                resolve(response);
              } else {
                reject(response);
              }
            } catch (error) {
              reject(error);
            }
          });
        }
      );
      input.on('error', reject);
      input.write(reqString);
      input.end();
    } catch (error) {
      reject(error);
    }
  });
}

export class DaemonServiceClient implements IDaemonServiceClient {
  url = 'http://localhost:5000';

  constructor(opts?: IDaemonServiceClientOpts) {
    if (opts && opts.url !== undefined) {
      this.url = opts.url;
    }
  }

  listPlatforms: IDaemonServiceClientListPlatformsFunction = async req => {
    return handler(req, `${this.url}/listPlatforms`);
  };
}
