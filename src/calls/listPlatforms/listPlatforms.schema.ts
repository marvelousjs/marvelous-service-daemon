const request = {
  type: 'object',
  additionalProperties: false
};

const response = {
  type: 'object',
  additionalProperties: false,
  properties: {
    platforms: {
      required: true,
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            required: true,
            type: 'string'
          }
        }
      }
    }
  }
};

export const ListPlatformsSchema = {
  request,
  response
};
