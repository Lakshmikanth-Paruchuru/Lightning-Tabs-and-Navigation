({
	accounts : function(component) {
        var action = component.get("c.getAccounts");
        action.setCallback(this,function(response){
           var state = response.getState();
            var ret = response.getReturnValue();
            component.set("v.Acc",ret);
        });
        $A.enqueueAction(action);
	},
    contacts : function(component) {
        var action = component.get("c.getContacts");
        action.setCallback(this,function(response){
           var state = response.getState();
            var ret = response.getReturnValue();
            component.set("v.Con",ret);
        });
        $A.enqueueAction(action);
	},
    opportunities : function(component) {
        var action = component.get("c.getOpportunities");
        action.setCallback(this,function(response){
           var state = response.getState();
            var ret = response.getReturnValue();
            component.set("v.Opp",ret);
        });
        $A.enqueueAction(action);
	},
    leads : function(component) {
        var action = component.get("c.getLeads");
        action.setCallback(this,function(response){
           var state = response.getState();
            var ret = response.getReturnValue();
            component.set("v.Ld",ret);
        });
        $A.enqueueAction(action);
	}
    
})