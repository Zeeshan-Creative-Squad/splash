import React, { Fragment, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import styles from "./BrandGrow.module.css";
import { Data } from "./data";
import { Link } from 'react-router-dom';

const BrandGrow = ({
  brandArray = Data,
  heading = 'ITS ALL ABOUT THE ATHLETE EXPERIENCE',
  span = '',
  btnReq = true,
  data,
  seoAnalysis
}) => {
  const [id, setId] = useState("1");

  const Array = seoAnalysis ? data : brandArray

  return (
    <div className={styles.main}>
      <Container>
        {!seoAnalysis && <h1 className="head-h1">
          {heading}
        </h1>}
        {seoAnalysis && <h1 style={{ textAlign: "center" }} className="heading_capital">
          In-Depth SEO <span style={{ fontWeight: "900" }}>Website Audit</span>
        </h1>}

        <Row className={styles.row}>
          <Fragment>
            <Col className={styles.imgCol} lg={6}>
              {Array.map(
                (item) =>
                  item.id === id && <img className="img-fluid" src={item.img} />
              )}
            </Col>
            <Col className={styles.contentCol} lg={6}>
              <div className={styles.tab}>
                <ul className={styles.liCont}>
                  {Array.map((item) => (
                    <li
                      onClick={() => setId(item.id)}
                      className={
                        item.id === id ? styles.tabItemActive : styles.tabItem
                      }
                    >
                      <h6
                        style={{
                          textTransform: "uppercase",
                          padding: item.padding && "0px 0px 0px 0px",
                          font: "normal normal normal 25px/26px Granjon;",
                          color: item.id === id && " #F13742",
                        }}
                      >
                        {item.heading}
                      </h6>
                    </li>
                  ))}
                </ul>
              </div>
              {!seoAnalysis && <div className={styles.box}>
                {brandArray.map((item) => {
                  if (item.id === id) {
                    return item.listItems.map((listItem) => (
                      <div className={styles.content_row} key={listItem.id}>

                        <div className={styles.details}>
                          <h2 className="h4_main mb-2">{listItem.heading}</h2>
                          <p className="para_main">{listItem.para}</p>
                        </div>
                      </div>
                    ));
                  }
                  return null;
                })}
              </div>}
              {seoAnalysis && <div className={styles.box}>
                {data.map((item) => {
                  if (item.id === id) {
                    return item.listItems.map((listItem) => (
                      <div className={styles.content_row} key={listItem.id}>
                        <div className={styles.details}>
                          <h1 className={styles.headh1}>It's All About the Athlete Experience</h1>
                          <h2 className="h2_main mb-4"><span>{item.heading}</span></h2>
                          <p className="para_main">{listItem.para}</p>
                        </div>
                      </div>
                    ));
                  }
                  return null;
                })}
              </div>}
            </Col>
          </Fragment>
        </Row>
      </Container>
    </div>
  )
}

export default BrandGrow;