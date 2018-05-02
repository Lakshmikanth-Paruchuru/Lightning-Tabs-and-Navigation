({
    doInit : function(component, event, helper){
        helper.accounts(component);
        helper.contacts(component);
        helper.opportunities(component);
        helper.leads(component);
    },
    next : function(component, event, helper) {
        var present = component.get("v.TabId");
        
        if(present == '1'){
            component.set("v.TabId" , '2');   
        }else if(present == '2'){
            component.set("v.TabId" , '3');     
        }else if(present == '3'){
            component.set("v.TabId" , '4');             
        }else if(present == '4'){
            alert('Complete !');  
        } 
    },
    
    back : function(component, event, helper) {
        var present = component.get("v.TabId");      
        if(present == '2'){
            component.set("v.TabId" , '1');     
        } else if(present == '3'){
            component.set("v.TabId" , '2');     
        }else if(present == '4'){
            component.set("v.TabId" , '3');     
        } 
    }
})
