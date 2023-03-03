import Vue from 'vue';
import Cloudinary, { CldImage,CldTransformation,CldVideo }  from 'cloudinary-vue';

Vue.use(Cloudinary, {
    configuration: { cloudName: 'dtjkvwvwy' },
    components: [ CldImage,CldTransformation,CldVideo ]
})
