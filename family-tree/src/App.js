import './App.css';

function App() {
  return (
    <div className="tree">
      <ul>
        <li>
          <a href="#">Parent</a>
          <ul>
            <li>
              <a href="#">Child</a>
              <ul>
                <li>
                  <a href="#">Grand Child</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Child</a>
              <ul>
                <li><a href="#">Grand Child</a></li>
                <li>
                  <a href="#">Grand Child</a>
                  <ul>
                    <li>
                      <a href="#">Great Grand Child</a>
                    </li>
                    <li>
                      <a href="#">Great Grand Child</a>
                    </li>
                    <li>
                      <a href="#">Great Grand Child</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Grand Child</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default App;
