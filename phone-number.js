function PhoneNumber(phoneNum) {

    PhoneNumber.prototype.number = function () {

        cleanNum = phoneNum.trim().replace(/[.*+()\s\-]/g, '');

        if (cleanNum.length == 10) {
            return cleanNum;
        }
        if (cleanNum.length == 11 && cleanNum.charAt(0) == 1) {
            return (cleanNum % 10000000000).toString();

        } else if (cleanNum.charAt(0) !== 1) {
            return '0000000000';
        }

        return '0000000000';
    };

    PhoneNumber.prototype.areaCode = function () {
        return phoneNum.slice(0, 3);
    };


    Object.prototype.toString = function () {

        lengthDic = {
            0: '(',
            3: ') ',
            6: '-'
        };

        formattedPhonNum = '';

        for (var i = 0; i < phoneNum.length; i++) {

            if (lengthDic[i]) {

                formattedPhonNum += lengthDic[i];
            }
            formattedPhonNum += phoneNum[i];
        }
        return formattedPhonNum;
    };

}

module.exports = PhoneNumber;