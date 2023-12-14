HomePage.js

import React, { useState, useEffect } from 'react';
import logo from '../../londynek_logo_square_192.png';
import './HomePage.css';
import NewsList from '../NewsList/NewsList.js';

/**
 * Komponent reprezentujący stronę domową.
 * 
 * Wykorzystuje Hooki useState i useEffect do zarządzania stanem
 * oraz efektem ładowania danych menu z pliku JSON.
 */
function HomePage() {
  const endpoint = '/json_static/menu.json'
  const [menuItems, setMenuItems] = useState([]);
  
  // Hook efektu do ładowania danych menu z pliku JSON przy pierwszym renderowaniu
  useEffect(() => {
    fetch(endpoint) // Ścieżka do pliku JSON
      .then(response => response.json()) // Parsowanie odpowiedzi jako JSON
      .then(data => setMenuItems(data)) // Aktualizacja stanu menuItems danymi z JSON
      .catch(error => console.error("Fetching menu failed:", error));
  }, []); // Pusta tablica jako drugi argument oznacza, że efekt uruchomi się tylko raz
	
  return (
    <div className="HomePage">
      <div className="module-info">===&gt;from HomePage&lt;===</div>
      <header className="HomePage-header">
        <img src={logo} className="HomePage-logo" alt="logo" />
				
        <ul>
          {menuItems.map((item, index) => (
            // Tworzenie listy elementów menu
            <li key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </header>
      
      <h1>Lista newsów</h1>
      <main>
        <NewsList />
        {/* Możesz dodać więcej komponentów NewsPage tutaj <h1>{NewsPage.key}</h1> nie dziala ;/ */}
      </main>
      
      <footer>
        FileList
      </footer>
    </div>
  );
}

export default HomePage;

