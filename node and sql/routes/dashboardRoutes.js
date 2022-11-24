const sql = require("mssql")
const router = require("express").Router()



router.post("/dashboardData", (req, res) => {
  const { sectionId } = req.body
  req.app.locals.db.query(`
    select count(DISTINCT order_details.order_id) as orderCount from order_details
    left join order_items on order_details.order_id = order_items.order_id
    left join product on order_items.product_id = product.product_id
    where product.sectionId =${sectionId};
    
    select count(DISTINCT product_id) as total_Items_In_Section from product
    where sectionId =${sectionId}

    select count(DISTINCT product_id) as low_stock_items from product
    where inStock = 0 AND sectionId = ${sectionId}
    
    select count(DISTINCT product_id) as low_stock_items from product
    where inStock = 0 AND sectionId = ${sectionId}

    select count(DISTINCT order_details.user_id) as customer_count from order_details
    left join order_items on order_details.order_id = order_items.order_id
    left join product on order_items.product_id = product.product_id
    where product.sectionId =${sectionId}
    `, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordsets)
  })
})





module.exports = router
