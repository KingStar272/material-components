import Component from 'vue-class-component';

import mdFileInput from '../../../components/form/file-input';

@Component({
    components: {
        mdFileInput
    },
    template: require('./file-inputs.html')
})
export default class FileInputs {

    data() {
        return {
            fileName: '',
            fileNames: '',
        }
    }
}

