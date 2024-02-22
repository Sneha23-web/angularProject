import Swal, { SweetAlertOptions } from "sweetalert2";
import { AppService } from "./app.service";



export function Test (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    // Again, cache the original method for later use
    const originalMethod = descriptor.value;
    // the configuration object for sweetalert
    const config: SweetAlertOptions = ({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    });
    // we write a new implementation for the method
    descriptor.value = async function (...args: any) {
      const res = await Swal.fire(config);  
      // fire sweetalert with the config object
      if (res.isConfirmed){ // if user clicked yes,
      // we run the original method with the original arguments
      const result = originalMethod.apply(this, args);
      // and return the result
      Swal.fire("Saved!", "", "success");
      console.log('saved');
      return result;
     }else if (res.isDenied) {
      const result1 = originalMethod.apply(this, args);
      Swal.fire("Changes are not saved", "", "info");
      console.log('denied');
      return result1;
    }
    };
    return descriptor;
    };

   