/*
==========================================
RAIHAN COFFEE
LOCAL STORAGE MANAGER
==========================================
*/

const Storage = {

    /*
    ==========================================
    SAVE
    ==========================================
    */

    set(key, value) {

        try {

            localStorage.setItem(

                key,

                JSON.stringify(value)

            );

            return true;

        } catch (error) {

            console.error(

                "Storage Error :",

                error

            );

            return false;

        }

    },



    /*
    ==========================================
    GET
    ==========================================
    */

    get(key, defaultValue = null) {

        try {

            const data =
                localStorage.getItem(key);

            if (!data) {

                return defaultValue;

            }

            return JSON.parse(data);

        } catch (error) {

            console.error(

                "Storage Error :",

                error

            );

            return defaultValue;

        }

    },

        /*
    ==========================================
    UPDATE
    ==========================================
    */

    update(key, callback) {

        const current =
            this.get(key);

        const updated =
            callback(current);

        this.set(
            key,
            updated
        );

    },

    /*
    ==========================================
    REMOVE
    ==========================================
    */

    remove(key) {

        localStorage.removeItem(key);

    },



    /*
    ==========================================
    CLEAR ALL
    ==========================================
    */

    clear() {

        localStorage.clear();

    },



    /*
    ==========================================
    CHECK
    ==========================================
    */

    has(key) {

        return localStorage.getItem(key) !== null;

    },

    /*
    ==========================================
    GET ALL KEYS
    ==========================================
    */

    keys() {

        return Object.keys(localStorage);

    }

    
};





/*
==========================================
APPLICATION STORAGE KEY
==========================================
*/

const STORAGE_KEY = Object.freeze({

    CART: "raihan-cart",

    LAST_ORDER: "raihan-last-order",

    HISTORY: "raihan-history",

    FAVORITE: "raihan-favorite",

    THEME: "raihan-theme"

});