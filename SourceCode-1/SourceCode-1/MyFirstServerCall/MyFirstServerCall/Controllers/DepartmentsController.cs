using MyFirstServerCall.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyFirstServerCall.Controllers
{
    public class DepartmentsController : Controller
    {
        // GET: Departments
        public ActionResult Index()
        {
            MyOrgEntities OE = new MyOrgEntities();
            var depts = OE.Departments.ToList();
            return Json(depts, JsonRequestBehavior.AllowGet);
        }
    }
}