import { ProductPulsa } from "../shared/product-pulsa.model";

export class ProductPulsaService {
    // ini harusnya di list-product letak nya
    private productPulsas: ProductPulsa[] = [
        new ProductPulsa(1, 'Axis 100 rb', 100000, 'Masa aktif 60 hari'),
        new ProductPulsa(2, 'Axis 150 rb', 150000, 'Masa aktif 90 hari'),
        new ProductPulsa(3, 'Axis 200 rb', 200000, 'Masa aktif 120 hari'),
        new ProductPulsa(4, 'Axis 500 rb', 500000, 'Masa aktif 240 hari'),
        new ProductPulsa(5, 'Axis 1 jt', 1000000, 'Masa aktif 360 hari'),
        new ProductPulsa(6, 'Axis 5 jt', 5000000, 'Masa aktif 2 thn'),
        new ProductPulsa(7, 'Axis 10 jt', 10000000, 'Masa aktif 3 thn'),
        new ProductPulsa(8, 'Axis 50 jt', 50000000, 'Masa aktif 3 thn'),
        new ProductPulsa(9, 'Axis 100 jt', 100000000, 'Masa aktif 3 thn'),
        new ProductPulsa(10, 'Axis 500 jt', 500000000, 'Masa aktif 3 thn'),
        new ProductPulsa(11, 'Axis 1 M', 1000000000, 'Masa aktif 3 thn'),
    ];

    getProductPulsas() {
        return this.productPulsas.slice();
    }

    getProductPulsa(id: number) {
        const pulsa = this.productPulsas.find(
            (s) => {
                return s.id === id;
            }
        );
        return pulsa;
    }
}
