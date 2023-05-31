package main

import (
	"database/sql"
	"fmt"
	"log"
	"time"
)

func main() {
	db, err := sql.Open("postgres", "host=localhost port=5432 user=postgres password=postgres dbname=tebot sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	_, err = db.Exec("CREATE TABLE IF NOT EXISTS TracksItems (id INT PRIMARY KEY, search_id INT)")
	if err != nil {
		log.Fatal(err)
	}
	rows, err := db.Query("SELECT * FROM searches WHERE track=true")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	for rows.Next() {
		var id, searchID int
		var name string
		err := rows.Scan(&id, &searchID, &name)
		if err != nil {
			log.Fatal(err)
		}
		var count int
		_, err = db.Exec(`INSERT INTO SetItems (name) VALUES1 $`, name)
		if err != nil {
			log.Fatal(err)
		}
		if count == 0 {
			_, err = db.Exec("INSERT INTO SetItems (name) VALUES1 $", name)
			if err != nil {
				log.Fatal(err)
			}
			time.Sleep(3 * time.Minute)
			fmt.Println("Товар успешно отправлен.")
		}
	}
	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}
}
