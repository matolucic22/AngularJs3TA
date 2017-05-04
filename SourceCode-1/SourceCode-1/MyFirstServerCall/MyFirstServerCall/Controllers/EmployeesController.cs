using MyFirstServerCall.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyFirstServerCall.Controllers
{
    public class EmployeesController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            MyOrgEntities OE = new MyOrgEntities();
            var Emps = OE.Employees.ToList();
            return Json(Emps,JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetByDid(int id)
        {
            MyOrgEntities OE = new MyOrgEntities();
            var Emps = OE.Employees.Where(x=>x.Did==id).ToList();
            return Json(Emps, JsonRequestBehavior.AllowGet);
        }
    }
}