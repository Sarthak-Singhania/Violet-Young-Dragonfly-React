import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const Header = (props) => {
  return (
    <>
      <div className={`header-container ${props.rootClassName} `}>
        <span className="top-bar">
          <span>
            For customizations or personal assistance, WhatsApp us at
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://api.whatsapp.com/send?phone=918920651205&amp;text=Hi!%20Could%20you%20help%20me%20with%20a%20few%20queries!"
            target="_blank"
            rel="noreferrer noopener"
            className="header-link"
          >
            +91 8920651205
          </a>
        </span>
        <header data-role="Header" className="header-header">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="header-image"
          />
          <div className="header-nav">
            <div
              data-thq="thq-dropdown"
              className="header-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle"
              >
                <span className="header-text02">{props.text}</span>
              </div>
              <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle01"
                  >
                    <span className="header-text03">{props.text1}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown01 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle02"
                  >
                    <span className="header-text04">{props.text2}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown02 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle03"
                  >
                    <span className="header-text05">{props.text3}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown03 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle04"
                  >
                    <span className="header-text06">{props.text4}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown04 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle05"
                  >
                    <span className="header-text07">{props.text5}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown05 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle06"
                  >
                    <span className="header-text08">{props.text6}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown06 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle07"
                  >
                    <span className="header-text09">{props.text7}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown07 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle08"
                  >
                    <span className="header-text10">{props.text8}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown08 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle09"
                  >
                    <span className="header-text11">{props.text9}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown09 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle10"
                  >
                    <span className="header-text12">{props.text10}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-btn-group">
            <svg viewBox="0 0 1024 1024" className="header-search">
              <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="header-wishlist">
              <path d="M950.857 340.571c0-160.571-108.571-194.286-200-194.286-85.143 0-181.143 92-210.857 127.429-13.714 16.571-42.286 16.571-56 0-29.714-35.429-125.714-127.429-210.857-127.429-91.429 0-200 33.714-200 194.286 0 104.571 105.714 201.714 106.857 202.857l332 320 331.429-319.429c1.714-1.714 107.429-98.857 107.429-203.429zM1024 340.571c0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="header-account">
              <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="header-cart">
              <path d="M1004 804.571l20 178.857c1.143 10.286-2.286 20.571-9.143 28.571-6.857 7.429-17.143 12-27.429 12h-950.857c-10.286 0-20.571-4.571-27.429-12-6.857-8-10.286-18.286-9.143-28.571l20-178.857h984zM950.857 325.143l49.143 442.857h-976l49.143-442.857c2.286-18.286 17.714-32.571 36.571-32.571h146.286v73.143c0 40.571 32.571 73.143 73.143 73.143s73.143-32.571 73.143-73.143v-73.143h219.429v73.143c0 40.571 32.571 73.143 73.143 73.143s73.143-32.571 73.143-73.143v-73.143h146.286c18.857 0 34.286 14.286 36.571 32.571zM731.429 219.429v146.286c0 20-16.571 36.571-36.571 36.571s-36.571-16.571-36.571-36.571v-146.286c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v146.286c0 20-16.571 36.571-36.571 36.571s-36.571-16.571-36.571-36.571v-146.286c0-121.143 98.286-219.429 219.429-219.429s219.429 98.286 219.429 219.429z"></path>
            </svg>
          </div>
          <div data-role="BurgerMenu" className="header-burger-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="header-mobile-menu">
            <div className="header-nav1">
              <div className="header-container1">
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="header-image1"
                />
                <div data-role="CloseMobileMenu" className="header-menu-close">
                  <svg viewBox="0 0 1024 1024" className="header-icon06">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="header-icon08"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="header-icon10"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="header-icon12"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .header-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .header-link {
            color: #e83647;
          }
          .header-header {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .header-image {
            width: 209px;
            height: 85px;
          }
          .header-nav {
            display: flex;
          }
          .header-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-text02 {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .header-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .header-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle01 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle01:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .header-text03 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .header-dropdown01 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle02 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle02:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .header-text04 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .header-dropdown02 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle03 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle03:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .header-text05 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .header-dropdown03 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle04 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle04:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .header-text06 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .header-dropdown04 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle05 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle05:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .header-text07 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .header-dropdown05 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle06 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle06:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .header-text08 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .header-dropdown06 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle07 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle07:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .header-text09 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .header-dropdown07 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle08 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle08:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .header-text10 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .header-dropdown08 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle09 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle09:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .header-text11 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .header-dropdown09 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .header-dropdown-toggle10 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .header-dropdown-toggle10:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .header-text12 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .header-btn-group {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .header-search {
            width: 24px;
            height: 24px;
          }
          .header-wishlist {
            width: 24px;
            height: 24px;
          }
          .header-account {
            width: 24px;
            height: 24px;
          }
          .header-cart {
            width: 24px;
            height: 24px;
          }
          .header-burger-menu {
            display: none;
          }
          .header-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .header-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .header-image1 {
            height: 2rem;
          }
          .header-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .header-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .header-nav {
              display: none;
            }
            .header-btn-group {
              display: none;
            }
            .header-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .header-header {
              padding: var(--dl-space-space-unit);
              padding-right: 16px;
            }
            .header-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  image_src: '/playground_assets/transparent%20logo-200h.png',
  image_alt: 'logo',
  text: 'Serveware',
  image_src1:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  image_alt1: 'image',
  text1: 'Sub-menu Item',
  text2: 'Sub-menu Item',
  text3: 'Sub-menu Item',
  text4: 'Sub-menu Item',
  text5: 'Sub-menu Item',
  text6: 'Sub-menu Item',
  text7: 'Sub-menu Item',
  text8: 'Sub-menu Item',
  text9: 'Sub-menu Item',
  text10: 'Sub-menu Item',
  rootClassName: '',
}

Header.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header
