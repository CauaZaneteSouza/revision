function maskCpfCnpjPureJs(element, only) {
    Array.from(element).forEach(function(elem) {
        elem.addEventListener("keyup", function(e) {
            // Current field value
            let value = this.value;
            // Removes all non-number characters
            value = value.replace(/\D/g, '');

            if (only == 'cpf') {
                // Mask only for CPF
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})(.)/, '$1.$2.$3-$4')
                    .replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4')
                    .replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3')
                    .replace(/(\d{3})(\d+)/, '$1.$2');
            } else if (only ==  'cnpj') { 
                // Mask only for CNPJ
                value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})(.)/, '$1.$2.$3/$4-$5')
                    .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, '$1.$2.$3/$4-$5')
                    .replace(/(\d{2})(\d{3})(\d{3})(\d+)/, '$1.$2.$3/$4')
                    .replace(/(\d{2})(\d{3})(\d+)/, '$1.$2.$3')
                    .replace(/^(\d{2})(\d{1,3})$/, '$1.$2');
            } else {
                // Mask for CPF and CNPJ
                value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})(.)/, '$1.$2.$3/$4-$5')
                    .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, '$1.$2.$3/$4-$5')
                    .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})$/, '$1.$2.$3/$4')
                    .replace(/^(\d{3})(\d{3})(\d{3})(\d+)$/, '$1.$2.$3-$4')
                    .replace(/^(\d{3})(\d{3})(\d+)$/, '$1.$2.$3')
                    .replace(/^(\d{3})(\d+)$/, '$1.$2');
            }

            // New field value with mask applied
            this.value = value;
        });
    });
}