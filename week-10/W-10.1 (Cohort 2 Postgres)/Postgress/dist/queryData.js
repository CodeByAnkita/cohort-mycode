"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Write a function getUser that lets you fetch data from the database given a email as input.
const pg_1 = require("pg");
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://pkmanas22:eijBGc85MNYR@ep-divine-rice-a5z5qg2g.us-east-2.aws.neon.tech/test?sslmode=require"
        });
        try {
            yield client.connect();
            const searchQuery = "SELECT * FROM users WHERE email = $1";
            const values = [email];
            const res = yield client.query(searchQuery, values);
            // console.log(res.rows.length);
            // console.log(res.rowCount);       // it can't be used as it may be null
            if (res.rows.length > 0) {
                console.log('User found:', res.rows[0]); // Output user data
                // return res.rows[0]; // Return the user data
            }
            else {
                console.log('No user found with the given email.');
                // return null; // Return null if no user was found
            }
            const finalSearchQuery = "SELECT city, country, street, pincode FROM addresses WHERE user_id = 1";
            const result = yield client.query(finalSearchQuery);
            console.log('Address found:', result.rows[0]);
        }
        catch (err) {
            console.error('Error during fetching user:', err);
            throw err; // Rethrow or handle error appropriately
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
getUser("manas2@pkmmanas.com").catch(console.error);
