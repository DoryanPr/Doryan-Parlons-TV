import { Meteor } from 'meteor/meteor';

// FilesCollection ne fonctionne pas sans le fichier interface.d.ts
import { FilesCollection } from 'meteor/ostrio:files';

export const ImagesCollection = new FilesCollection({
    storagePath: "assets/app/whatsapp/uploads/Images",
    downloadRoute: "/files/images",
    permissions: 0o755,
    cacheControl: "public, max-age=31536000",
    collectionName: 'Images',
    allowClientCode: false, // Disallow remove files from Client
    onBeforeUpload(file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
            return true;
        }
        return 'Please upload image, with size equal or less than 10MB';
    }
})

if (Meteor.isServer) {
    Meteor.publish('images.all', function () {
        return ImagesCollection.find();
    });
    ImagesCollection.allowClient()
    Meteor.methods({
        "images.url": function
    })
}