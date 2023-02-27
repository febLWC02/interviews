/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api } from "lwc";
import getQuoteFromApex from '@salesforce/apex/EditQuotePage_Ctrl.getQuote';
import { showMessage } from 'c/utilityComponent';

export default class EditQuote extends LightningElement {
  @api recordId;
  quoteData = {
    name: "Quote Name",
    endDate: 1547250828000
  };

  connectedCallback() {
    this.getQuote();
  }
  param;
  getQuote() {
    if (this.recordId) {
      getQuoteFromApex({ quoteId: this.recordId })
        .then(result => {
          this.quoteData = result;
          // Success logic...
        })
        .catch(error => {
          console.log('Apex Error', error);
          showMessage(this, 'Error', 'Something went wrong please contact to admin', 'error');

        });
    }
  }

  renderedCallback() { }
}
