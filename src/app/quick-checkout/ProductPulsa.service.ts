import { ProductPulsa } from "../shared/product-pulsa.model";

export class ProductPulsaService {
    private productPulsas: ProductPulsa[] = [
        new ProductPulsa(1, 'Pulsa 100 rb', 100000, 'Masa aktif 60 hari'),
        new ProductPulsa(2, 'Pulsa 150 rb', 150000, 'Masa aktif 90 hari'),
        new ProductPulsa(3, 'Pulsa 200 rb', 200000, 'Masa aktif 120 hari'),
        new ProductPulsa(4, 'Pulsa 500 rb', 500000, 'Masa aktif 240 hari'),
        new ProductPulsa(5, 'Pulsa 1 jt', 1000000, 'Masa aktif 360 hari'),
        new ProductPulsa(6, 'Pulsa 5 jt', 5000000, 'Masa aktif 360 hari'),
        new ProductPulsa(7, 'Pulsa 10 jt', 10000000, 'Masa aktif 360 hari'),
        new ProductPulsa(8, 'Pulsa 50 jt', 50000000, 'Masa aktif 360 harin'),
        new ProductPulsa(9, 'Pulsa 100 jt', 100000000, 'Masa aktif 360 hari'),
        new ProductPulsa(10, 'Pulsa 500 jt', 500000000, 'Masa aktif 360 hari'),
        new ProductPulsa(11, 'Pulsa 1 M', 1000000000, 'Masa aktif 360 hari'),
    ];

    getProductPulsas() {
        return this.productPulsas.slice();
    }
}
