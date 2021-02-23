import { ValidatorMsisdn } from "../shared/validator-msisdn.model";

export class ValidatorMsisdnService {
    private validatorMsisdns: ValidatorMsisdn[] = [
        new ValidatorMsisdn(
            1,
            '083889891111',
            'user1@gmail.com'
        ),
        new ValidatorMsisdn(
            2,
            '083889891112',
            'user2@gmail.com'
        ),
        new ValidatorMsisdn(
            3,
            '083889891113',
            'user3@gmail.com'
        ),
        new ValidatorMsisdn(
            4,
            '083889891114',
            'user4@gmail.com'
        ),
        new ValidatorMsisdn(
            5,
            '083889891115',
            'user5@gmail.com'
        ),
        new ValidatorMsisdn(
            6,
            '083889891116',
            'user6@gmail.com'
        ),
        new ValidatorMsisdn(
            1,
            '083889891117',
            'user7@gmail.com'
        ),
        new ValidatorMsisdn(
            1,
            '083889891118',
            'user8@gmail.com'
        ),
        new ValidatorMsisdn(
            1,
            '083889891119',
            'user9@gmail.com'
        ),
        new ValidatorMsisdn(
            1,
            '083889891110',
            'user10@gmail.com'
        ),
    ];

    getMsisdn(msisdn: string) {
        const msisdnFind = this.validatorMsisdns.find(
            (s) => {
                return s.msisdn === msisdn;
            }
        );

        return msisdnFind;
    }
}