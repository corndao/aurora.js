/* This is free and unencumbered software released into the public domain. */

import NEAR from 'near-api-js';

export default NEAR;

export interface NEARBlock {
  hash: Uint8Array;
}

export interface NEARTransaction {
  hash: Uint8Array;
}
