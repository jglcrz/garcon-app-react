import menu from 'C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/assets/data/menu.json';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

function Appetizer() {
    const classification = 'Appetizer'
    function renderProcessData() {
        const isInclude = (value) => {
            if(value.classification == classification){
                return true;
            }
        };
        var mainMenu = menu.filter(isInclude);
        for(var i = 0; i < menu.length; i++){
            return mainMenu.map((item) => {
                return (
                    <div className="col-sm-6 col-xs-12">
                        <a href={'/menu-info/'+item.id} className="gc-home__card">
                            <img src={item.pictureUrl} alt="Order" />
                            <span>{item.name}</span>
                        </a>
                    </div>
                )
            });
        }

    }
    return (<>
        <div className="gc-home">
            <div className="row">
                {renderProcessData()}
            </div>
        </div>
    </>)
  }
  

export default Appetizer;