const sql = require("mssql")
const router = require("express").Router()



router.post("/orderCount", (req,res) =>{
  const {sectionId} = req.body
    req.app.locals.db.query(`select count(DISTINCT order_details.order_id) as orderCount from order_details
    left join order_items on order_details.order_id = order_items.order_id
    left join product on order_items.product_id = product.product_id
    where product.sectionId =${sectionId}`, function(err, recordset) {
        if (err) {
          console.error(err)
          res.status(500).send('SERVER ERROR')
          return
        }
        res.status(200).json(recordset.recordset)
      })
})





module.exports = router
