import React from "react";
import Sidebar from "react-sidebar";
import ImageAvatars from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
const mql = window.matchMedia(`(min-width: 400px)`);
 
class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
 
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
 
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={
          <div>
          <ImageAvatars />
          <ul className="social-icon-list">
            <li>
              <a
                href="https://www.facebook.com/carlytesnor"
                className="social-link"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} size="sm" />
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/carlytesnor"
                className="social-link"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} size="sm" />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/TesnorC" className="social-link">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="sm" />
              </a>
            </li>
          </ul>
        </div>}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        
      >
        
      </Sidebar>
    );
  }
}
 
export default Bar;