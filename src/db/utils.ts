import _ from 'lodash';

export function wrapIdentifier(
    identifier: string,
    origWrap: (v: string) => string,
) {
    return origWrap(_.snakeCase(identifier));
};

export function postProcessResponse(result: any) {
    if (Array.isArray(result)) {
      const output = new Array(result.length);

      for (let i = 0, l = result.length; i < l; ++i) {
        output[i] = _.mapKeys(result[i], (v, key) => _.camelCase(key));
      }

      return output;
    } else {
      return _.mapKeys(result, (v, key) => _.camelCase(key));
    }
};
