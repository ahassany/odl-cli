{
    u'cookie': 0,
    u'flags': u'',
    u'id': u'298a',
    u'instructions': {u'instruction': [{u'apply-actions': {u'action': [{u'order': 1,
									u'push-vlan-action': {u'ethernet-type': 33024}},
								       {u'order': 2,
									u'set-field': {u'vlan-match': {u'vlan-id': {u'vlan-id': 298,
														    u'vlan-id-present': True}}}},
								       {u'order': 0,
									u'output-action': {u'max-length': 0,
											   u'output-node-connector': u'37'}}]},
					u'order': 0}]},
    u'match': {u'ethernet-match': {u'ethernet-type': {u'type': 33024}},
	       u'vlan-match': {u'vlan-id': {u'vlan-id': 298,
					    u'vlan-id-present': True}}},
    u'priority': 500,
    u'table_id': 0}]}}]}