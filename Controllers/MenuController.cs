using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcApplication1.Controllers
{
    public class MenuController : Controller
    {
        //
        // GET: /Menu/

        public ActionResult Index()
        {
            // check login user if not authorized
            if (Session["loginUser"] == null)
            {
                //redirect to home page
                return Redirect("/");
            }
            // check login user if authorized
            else if (Session["loginUser"].ToString() == "success")
            {
                //redirect to menu page
                return View();
            }

            //redirect to home page
            return Redirect("/");
        }

        //initialize entity model
        sampleAngularWithMVCEntities db = new sampleAngularWithMVCEntities();

        //save/update post request for Menu
        [HttpPost]
        public void MenuService(tb_Menu objtb_Menu)
        {
            objtb_Menu.deleted = false;

            //for save
            if (objtb_Menu.id <= 0) { 
                objtb_Menu.createdOn = DateTime.Now;
                db.tb_Menu.Add(objtb_Menu);
                db.SaveChanges();
                return;
            }

            //for update
            objtb_Menu.updatedOn = DateTime.Now;
            db.Entry(objtb_Menu).State = System.Data.EntityState.Modified;
            db.SaveChanges();

        }

        //Get menu list request
        public JsonResult MenuService()
        {
            var menuList = db.tb_Menu.Where(m => m.deleted == false).Select(m => m).ToList();
            return Json(menuList, JsonRequestBehavior.AllowGet);
        }

        //delete menu object request by id
        public void DeleteMenuService(int id)
        {
            tb_Menu objtb_Menu = db.tb_Menu.Where(m => m.id == id).FirstOrDefault();
            objtb_Menu.deleted = true;
            objtb_Menu.updatedOn = DateTime.Now;
            db.Entry(objtb_Menu).State = System.Data.EntityState.Modified;
            db.SaveChanges();
        }
    }
}
