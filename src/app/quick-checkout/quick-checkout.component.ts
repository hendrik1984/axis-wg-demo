import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductPulsa } from '../shared/product-pulsa.model';
import { ProductPulsaService } from './ProductPulsa.service';
import { ValidatorMsisdnService } from './ValidatorMsisdn.service';

@Component({
  selector: 'app-quick-checkout',
  templateUrl: './quick-checkout.component.html',
  styleUrls: ['./quick-checkout.component.css']
})
export class QuickCheckoutComponent implements OnInit {
  doTransaction = true;
  msisdnCheck = false;
  emailCheck = false;
  msisdn: number;
  email: string;
  productPulsaView = {};
  retrieveData = {};
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private productPulsa: ProductPulsaService,
              private validatorMsisdnService: ValidatorMsisdnService) { }

  ngOnInit(): void {
    this.retrieveData = this.route.snapshot.queryParams;
    // console.log(this.retrieveData);
    // console.log(this.retrieveData['product_id']);
    // console.log(this.retrieveData['email']);

    // validate msisdn not empty
    this.onMsisdnCheck(this.retrieveData['msisdn']);

    // validate email not empty
    this.onEmailCheck(this.retrieveData['email']);

    // validate msisdn and email
    this.onValidateMsisdnAndEmail(this.retrieveData['msisdn'], this.retrieveData['email'])

    // insert into view checkout
    this.productPulsaView = this.onGetProduct(+this.retrieveData['product_id']);
    this.productPulsaView['msisdn'] = this.retrieveData['msisdn'];
    // console.log(this.productPulsaView);
  }

  onGetProduct(product_id: number) {
    return this.productPulsa.getProductPulsa(product_id);
  }

  onMsisdnCheck(msisdn: string) {
    if (msisdn == ''){
      this.doTransaction = false;
      this.errorMessage = 'MSISDN tidak boleh kosong';
    }
  }

  onEmailCheck(email: string) {
    if (email == ''){
      this.doTransaction = false;
      this.errorMessage = 'Email tidak boleh kosong';
    }
  }

  onValidateMsisdnAndEmail(msisdn: string, email: string) {
    const find = this.validatorMsisdnService.getMsisdn(msisdn);
    if (!find) {
      this.doTransaction = false;
      this.errorMessage = 'Nomor ' + msisdn + ' tidak berhak untuk melakukan Transaksi. silakan hubungi Axis Customer Service di nomor ini.'
    }

    if (find.email != email) {
      this.doTransaction = false;
      this.errorMessage = 'Email ' + email + ' tidak terhubung dengan nomor MSISDN ini silakan cek kembali.'
    }
  }

}
