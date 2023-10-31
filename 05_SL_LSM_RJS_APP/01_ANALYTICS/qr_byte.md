    Analytics.record({
            name: 'click_deal',
            attributes: {
              dealID: responseDeal.id,
              userID: responseUser.attributes.sub,
              redeemedDeal: redeemedDeal.id, 
              rateID: responseDeal.rates[0].id, 
              ratePriceID: responseDeal.rates[0].price, 
              mallID: responseDeal.store.mallID
          },
        })